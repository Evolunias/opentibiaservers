import NoResetRealeraHighscoresKeywordPage, { generateMetadata } from './no-reset-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetRealeraHighscoresKeywordPage />;
}
