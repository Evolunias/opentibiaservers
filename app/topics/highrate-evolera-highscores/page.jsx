import HighrateEvoleraHighscoresKeywordPage, { generateMetadata } from './highrate-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateEvoleraHighscoresKeywordPage />;
}
