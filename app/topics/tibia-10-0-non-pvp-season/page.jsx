import Tibia100NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-10-0-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100NonPvpSeasonKeywordPage />;
}
