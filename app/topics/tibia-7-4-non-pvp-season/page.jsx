import Tibia74NonPvpSeasonKeywordPage, { generateMetadata } from './tibia-7-4-non-pvp-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74NonPvpSeasonKeywordPage />;
}
