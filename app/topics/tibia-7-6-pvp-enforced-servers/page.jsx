import Tibia76PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedServersKeywordPage />;
}
