import RealMapCanobHighscoresKeywordPage, { generateMetadata } from './real-map-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCanobHighscoresKeywordPage />;
}
