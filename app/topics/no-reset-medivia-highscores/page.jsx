import NoResetMediviaHighscoresKeywordPage, { generateMetadata } from './no-reset-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaHighscoresKeywordPage />;
}
