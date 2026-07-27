import Tibia84NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-8-4-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84NonPvpSeasonKeywordPage />;
}
