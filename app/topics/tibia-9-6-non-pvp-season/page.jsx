import Tibia96NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-9-6-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96NonPvpSeasonKeywordPage />;
}
