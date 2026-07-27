import Tibia15RetroSeasonKeywordPage, { generateMetadata } from './tibia-15-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroSeasonKeywordPage />;
}
