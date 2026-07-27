import TopOlderaHighscoresKeywordPage, { generateMetadata } from './top-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopOlderaHighscoresKeywordPage />;
}
