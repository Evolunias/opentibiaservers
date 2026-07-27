import TopCyntaraHighscoresKeywordPage, { generateMetadata } from './top-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCyntaraHighscoresKeywordPage />;
}
