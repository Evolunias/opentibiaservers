import RealMapCyntaraHighscoresKeywordPage, { generateMetadata } from './real-map-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCyntaraHighscoresKeywordPage />;
}
