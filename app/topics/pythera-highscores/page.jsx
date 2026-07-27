import PytheraHighscoresKeywordPage, { generateMetadata } from './pythera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraHighscoresKeywordPage />;
}
