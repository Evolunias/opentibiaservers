import Tibia12PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-12-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpEnforcedServersKeywordPage />;
}
