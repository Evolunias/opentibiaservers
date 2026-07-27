import Tibia84PvpSeasonKeywordPage, { generateMetadata } from './tibia-8-4-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84PvpSeasonKeywordPage />;
}
