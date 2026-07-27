import RealMapRealestaHighscoresKeywordPage, { generateMetadata } from './real-map-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapRealestaHighscoresKeywordPage />;
}
