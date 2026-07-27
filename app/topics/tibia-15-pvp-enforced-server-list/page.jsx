import Tibia15PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-15-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpEnforcedServerListKeywordPage />;
}
