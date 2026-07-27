import RealMapInfernalOtHighscoresKeywordPage, { generateMetadata } from './real-map-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapInfernalOtHighscoresKeywordPage />;
}
