import BestHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './best-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestHarmoniaOtHighscoresKeywordPage />;
}
