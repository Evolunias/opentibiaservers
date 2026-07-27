import Tibia76RetroSeasonKeywordPage, { generateMetadata } from './tibia-7-6-retro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroSeasonKeywordPage />;
}
