import Tibia76PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-7-6-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpEnforcedSeasonKeywordPage />;
}
