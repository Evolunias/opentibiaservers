import Tibia11PvpEnforcedServersKeywordPage, { generateMetadata } from './tibia-11-pvp-enforced-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpEnforcedServersKeywordPage />;
}
