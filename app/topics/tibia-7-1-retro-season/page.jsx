import Tibia71RetroSeasonKeywordPage, { generateMetadata } from './tibia-7-1-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroSeasonKeywordPage />;
}
