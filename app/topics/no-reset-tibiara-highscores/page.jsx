import NoResetTibiaraHighscoresKeywordPage, { generateMetadata } from './no-reset-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraHighscoresKeywordPage />;
}
