import NewEvoleraHighscoresKeywordPage, { generateMetadata } from './new-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewEvoleraHighscoresKeywordPage />;
}
