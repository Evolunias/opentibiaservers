import Tibia80PvpEnforcedSeasonKeywordPage, { generateMetadata } from './tibia-8-0-pvp-enforced-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80PvpEnforcedSeasonKeywordPage />;
}
