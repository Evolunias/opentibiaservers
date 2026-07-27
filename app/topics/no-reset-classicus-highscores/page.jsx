import NoResetClassicusHighscoresKeywordPage, { generateMetadata } from './no-reset-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetClassicusHighscoresKeywordPage />;
}
