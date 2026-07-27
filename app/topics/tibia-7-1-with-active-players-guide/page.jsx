import Tibia71WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-7-1-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71WithActivePlayersGuideKeywordPage />;
}
