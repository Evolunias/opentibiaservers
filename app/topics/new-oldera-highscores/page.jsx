import NewOlderaHighscoresKeywordPage, { generateMetadata } from './new-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOlderaHighscoresKeywordPage />;
}
