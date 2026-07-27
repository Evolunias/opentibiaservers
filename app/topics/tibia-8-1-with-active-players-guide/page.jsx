import Tibia81WithActivePlayersGuideKeywordPage, { generateMetadata } from './tibia-8-1-with-active-players-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81WithActivePlayersGuideKeywordPage />;
}
