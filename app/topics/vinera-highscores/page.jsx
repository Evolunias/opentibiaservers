import VineraHighscoresKeywordPage, { generateMetadata } from './vinera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <VineraHighscoresKeywordPage />;
}
