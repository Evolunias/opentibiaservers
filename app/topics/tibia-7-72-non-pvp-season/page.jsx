import Tibia772NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-7-72-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772NonPvpSeasonKeywordPage />;
}
