import CurrentYurotsHighscoresKeywordPage, { generateMetadata } from './current-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentYurotsHighscoresKeywordPage />;
}
