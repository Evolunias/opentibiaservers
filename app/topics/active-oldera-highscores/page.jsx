import ActiveOlderaHighscoresKeywordPage, { generateMetadata } from './active-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveOlderaHighscoresKeywordPage />;
}
