import Tibia1098NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-10-98-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098NonPvpSeasonKeywordPage />;
}
