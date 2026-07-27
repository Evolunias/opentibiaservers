import RealMapTibiameHighscoresKeywordPage, { generateMetadata } from './real-map-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapTibiameHighscoresKeywordPage />;
}
