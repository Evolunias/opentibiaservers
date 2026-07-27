import Tibia71PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedServerListKeywordPage />;
}
