import Tibia80NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-8-0-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80NonPvpSeasonKeywordPage />;
}
