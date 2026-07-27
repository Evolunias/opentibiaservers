import ShiveraHighscoresKeywordPage, { generateMetadata } from './shivera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ShiveraHighscoresKeywordPage />;
}
