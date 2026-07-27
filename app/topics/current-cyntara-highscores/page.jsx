import CurrentCyntaraHighscoresKeywordPage, { generateMetadata } from './current-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCyntaraHighscoresKeywordPage />;
}
