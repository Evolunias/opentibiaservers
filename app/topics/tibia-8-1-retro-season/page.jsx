import Tibia81RetroSeasonKeywordPage, { generateMetadata } from './tibia-8-1-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroSeasonKeywordPage />;
}
