import Tibia772RetroSeasonKeywordPage, { generateMetadata } from './tibia-7-72-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RetroSeasonKeywordPage />;
}
