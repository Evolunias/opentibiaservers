import Tibia772PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-7-72-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpEnforcedSeasonKeywordPage />;
}
