import Tibia854NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-8-54-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854NonPvpSeasonKeywordPage />;
}
