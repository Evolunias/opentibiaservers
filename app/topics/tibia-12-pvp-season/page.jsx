import Tibia12PvpSeasonKeywordPage, { generateMetadata } from './tibia-12-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12PvpSeasonKeywordPage />;
}
