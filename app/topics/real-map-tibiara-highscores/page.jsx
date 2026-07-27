import RealMapTibiaraHighscoresKeywordPage, { generateMetadata } from './real-map-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiaraHighscoresKeywordPage />;
}
