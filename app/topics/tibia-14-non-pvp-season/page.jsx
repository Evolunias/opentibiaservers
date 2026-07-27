import Tibia14NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-14-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14NonPvpSeasonKeywordPage />;
}
