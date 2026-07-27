import ActiveHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './active-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveHarmoniaOtHighscoresKeywordPage />;
}
