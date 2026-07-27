import CalmeraHighscoresKeywordPage, { generateMetadata } from './calmera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraHighscoresKeywordPage />;
}
