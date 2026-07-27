import Tibia76PvpSeasonKeywordPage, { generateMetadata } from './tibia-7-6-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76PvpSeasonKeywordPage />;
}
