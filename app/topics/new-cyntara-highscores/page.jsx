import NewCyntaraHighscoresKeywordPage, { generateMetadata } from './new-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCyntaraHighscoresKeywordPage />;
}
