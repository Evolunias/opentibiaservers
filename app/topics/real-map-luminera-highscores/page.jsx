import RealMapLumineraHighscoresKeywordPage, { generateMetadata } from './real-map-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapLumineraHighscoresKeywordPage />;
}
