import Tibia14RetroSeasonKeywordPage, { generateMetadata } from './tibia-14-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroSeasonKeywordPage />;
}
