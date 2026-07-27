import RealMapCalmeraOtHighscoresKeywordPage, { generateMetadata } from './real-map-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapCalmeraOtHighscoresKeywordPage />;
}
