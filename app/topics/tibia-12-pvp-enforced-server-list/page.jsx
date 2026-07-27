import Tibia12PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedServerListKeywordPage />;
}
