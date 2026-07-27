import Tibia13NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-13-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13NonPvpSeasonKeywordPage />;
}
