import NoResetElderaHighscoresKeywordPage, { generateMetadata } from './no-reset-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetElderaHighscoresKeywordPage />;
}
