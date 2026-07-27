import FreshStartCyntaraHighscoresKeywordPage, { generateMetadata } from './fresh-start-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCyntaraHighscoresKeywordPage />;
}
