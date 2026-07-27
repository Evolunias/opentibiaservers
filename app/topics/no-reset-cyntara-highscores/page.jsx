import NoResetCyntaraHighscoresKeywordPage, { generateMetadata } from './no-reset-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCyntaraHighscoresKeywordPage />;
}
