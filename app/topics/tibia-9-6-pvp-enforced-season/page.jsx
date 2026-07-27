import Tibia96PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-9-6-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpEnforcedSeasonKeywordPage />;
}
