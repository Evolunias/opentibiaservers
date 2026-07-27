import NoResetEvoleraHighscoresKeywordPage, { generateMetadata } from './no-reset-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetEvoleraHighscoresKeywordPage />;
}
