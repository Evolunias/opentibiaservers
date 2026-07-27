import CurrentEvoleraHighscoresKeywordPage, { generateMetadata } from './current-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentEvoleraHighscoresKeywordPage />;
}
