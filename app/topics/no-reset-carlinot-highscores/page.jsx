import NoResetCarlinotHighscoresKeywordPage, { generateMetadata } from './no-reset-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotHighscoresKeywordPage />;
}
