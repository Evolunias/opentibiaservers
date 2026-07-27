import CurrentElderaHighscoresKeywordPage, { generateMetadata } from './current-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentElderaHighscoresKeywordPage />;
}
