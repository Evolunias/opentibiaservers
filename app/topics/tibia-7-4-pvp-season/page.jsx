import Tibia74PvpSeasonKeywordPage, { generateMetadata } from './tibia-7-4-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74PvpSeasonKeywordPage />;
}
