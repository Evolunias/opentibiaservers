import NoResetMistOfDeathHighscoresKeywordPage, { generateMetadata } from './no-reset-mist-of-death-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMistOfDeathHighscoresKeywordPage />;
}
