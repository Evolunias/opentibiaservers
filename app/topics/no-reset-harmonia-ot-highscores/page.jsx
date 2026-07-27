import NoResetHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './no-reset-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetHarmoniaOtHighscoresKeywordPage />;
}
