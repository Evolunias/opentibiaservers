import Tibia84RetroSeasonKeywordPage, { generateMetadata } from './tibia-8-4-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroSeasonKeywordPage />;
}
