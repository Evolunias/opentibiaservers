import Tibia772PvpSeasonKeywordPage, { generateMetadata } from './tibia-7-72-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772PvpSeasonKeywordPage />;
}
