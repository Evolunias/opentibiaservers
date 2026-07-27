import KyraHighscoresKeywordPage, { generateMetadata } from './kyra-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KyraHighscoresKeywordPage />;
}
