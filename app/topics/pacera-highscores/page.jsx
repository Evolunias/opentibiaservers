import PaceraHighscoresKeywordPage, { generateMetadata } from './pacera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraHighscoresKeywordPage />;
}
