import Tibia86PvpSeasonKeywordPage, { generateMetadata } from './tibia-8-6-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86PvpSeasonKeywordPage />;
}
