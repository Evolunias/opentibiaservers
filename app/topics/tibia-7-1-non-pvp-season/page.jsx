import Tibia71NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-7-1-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71NonPvpSeasonKeywordPage />;
}
