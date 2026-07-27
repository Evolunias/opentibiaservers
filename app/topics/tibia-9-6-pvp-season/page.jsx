import Tibia96PvpSeasonKeywordPage, { generateMetadata } from './tibia-9-6-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96PvpSeasonKeywordPage />;
}
