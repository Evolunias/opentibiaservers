import Tibia81NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-8-1-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81NonPvpSeasonKeywordPage />;
}
