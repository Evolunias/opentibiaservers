import Tibia84PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-8-4-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpEnforcedServersKeywordPage />;
}
