import Tibia86NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-8-6-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86NonPvpSeasonKeywordPage />;
}
