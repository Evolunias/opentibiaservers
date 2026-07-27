import CurrentTibiaraHighscoresKeywordPage, { generateMetadata } from './current-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraHighscoresKeywordPage />;
}
