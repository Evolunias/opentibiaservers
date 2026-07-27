import Tibia854PvpSeasonKeywordPage, { generateMetadata } from './tibia-8-54-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854PvpSeasonKeywordPage />;
}
