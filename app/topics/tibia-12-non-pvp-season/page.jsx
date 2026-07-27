import Tibia12NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-12-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12NonPvpSeasonKeywordPage />;
}
