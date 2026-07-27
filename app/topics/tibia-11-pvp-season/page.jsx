import Tibia11PvpSeasonKeywordPage, { generateMetadata } from './tibia-11-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11PvpSeasonKeywordPage />;
}
