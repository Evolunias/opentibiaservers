import CurrentOlderaHighscoresKeywordPage, { generateMetadata } from './current-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOlderaHighscoresKeywordPage />;
}
