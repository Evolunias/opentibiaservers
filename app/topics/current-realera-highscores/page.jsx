import CurrentRealeraHighscoresKeywordPage, { generateMetadata } from './current-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentRealeraHighscoresKeywordPage />;
}
