import TopEvoleraHighscoresKeywordPage, { generateMetadata } from './top-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopEvoleraHighscoresKeywordPage />;
}
