import Tibia81PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-8-1-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81PvpEnforcedServersKeywordPage />;
}
