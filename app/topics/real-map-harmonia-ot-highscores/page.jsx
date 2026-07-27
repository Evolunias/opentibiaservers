import RealMapHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './real-map-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapHarmoniaOtHighscoresKeywordPage />;
}
