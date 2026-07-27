import Tibia81PvpEnforcedServerListKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedServerListKeywordPage />;
}
