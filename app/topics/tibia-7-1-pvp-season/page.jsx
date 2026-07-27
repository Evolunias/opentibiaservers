import Tibia71PvpSeasonKeywordPage, { generateMetadata } from './tibia-7-1-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71PvpSeasonKeywordPage />;
}
