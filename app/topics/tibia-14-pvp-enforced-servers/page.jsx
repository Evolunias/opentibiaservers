import Tibia14PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-14-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpEnforcedServersKeywordPage />;
}
