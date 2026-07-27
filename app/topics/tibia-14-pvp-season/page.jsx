import Tibia14PvpSeasonKeywordPage, { generateMetadata } from './tibia-14-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14PvpSeasonKeywordPage />;
}
