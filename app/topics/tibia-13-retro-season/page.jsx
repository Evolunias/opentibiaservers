import Tibia13RetroSeasonKeywordPage, { generateMetadata } from './tibia-13-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroSeasonKeywordPage />;
}
