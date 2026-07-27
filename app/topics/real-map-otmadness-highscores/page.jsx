import RealMapOtmadnessHighscoresKeywordPage, { generateMetadata } from './real-map-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapOtmadnessHighscoresKeywordPage />;
}
