import Tibia13PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-13-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpEnforcedServersKeywordPage />;
}
