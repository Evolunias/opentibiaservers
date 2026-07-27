import Tibia71PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-7-1-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpEnforcedServersKeywordPage />;
}
