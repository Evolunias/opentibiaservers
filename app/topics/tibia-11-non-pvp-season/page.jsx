import Tibia11NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-11-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11NonPvpSeasonKeywordPage />;
}
