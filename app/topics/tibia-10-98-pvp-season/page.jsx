import Tibia1098PvpSeasonKeywordPage, { generateMetadata } from './tibia-10-98-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098PvpSeasonKeywordPage />;
}
