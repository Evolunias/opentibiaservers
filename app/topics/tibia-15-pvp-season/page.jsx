import Tibia15PvpSeasonKeywordPage, { generateMetadata } from './tibia-15-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15PvpSeasonKeywordPage />;
}
