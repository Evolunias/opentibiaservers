import Tibia13PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedServerListKeywordPage />;
}
