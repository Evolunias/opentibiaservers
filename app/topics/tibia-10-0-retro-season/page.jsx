import Tibia100RetroSeasonKeywordPage, { generateMetadata } from './tibia-10-0-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroSeasonKeywordPage />;
}
