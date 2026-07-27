import Tibia11RetroSeasonKeywordPage, { generateMetadata } from './tibia-11-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroSeasonKeywordPage />;
}
