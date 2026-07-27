import RealMapBlazeraHighscoresKeywordPage, { generateMetadata } from './real-map-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapBlazeraHighscoresKeywordPage />;
}
