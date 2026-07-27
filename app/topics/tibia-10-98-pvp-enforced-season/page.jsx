import Tibia1098PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-10-98-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpEnforcedSeasonKeywordPage />;
}
