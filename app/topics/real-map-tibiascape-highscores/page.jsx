import RealMapTibiascapeHighscoresKeywordPage, { generateMetadata } from './real-map-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiascapeHighscoresKeywordPage />;
}
