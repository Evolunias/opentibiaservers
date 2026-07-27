import NoResetOlderaHighscoresKeywordPage, { generateMetadata } from './no-reset-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetOlderaHighscoresKeywordPage />;
}
