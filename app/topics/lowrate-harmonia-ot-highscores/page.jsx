import LowrateHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './lowrate-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateHarmoniaOtHighscoresKeywordPage />;
}
