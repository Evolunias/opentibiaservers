import Tibia13PvpSeasonKeywordPage, { generateMetadata } from './tibia-13-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13PvpSeasonKeywordPage />;
}
