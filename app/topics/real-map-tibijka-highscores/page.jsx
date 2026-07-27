import RealMapTibijkaHighscoresKeywordPage, { generateMetadata } from './real-map-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibijkaHighscoresKeywordPage />;
}
