import RealMapImperianicHighscoresKeywordPage, { generateMetadata } from './real-map-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapImperianicHighscoresKeywordPage />;
}
