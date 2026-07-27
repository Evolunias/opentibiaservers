import Tibia76NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-7-6-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76NonPvpSeasonKeywordPage />;
}
