import Tibia14PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedServerListKeywordPage />;
}
