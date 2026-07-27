import RealMapElderaHighscoresKeywordPage, { generateMetadata } from './real-map-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapElderaHighscoresKeywordPage />;
}
