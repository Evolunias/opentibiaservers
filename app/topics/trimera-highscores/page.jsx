import TrimeraHighscoresKeywordPage, { generateMetadata } from './trimera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrimeraHighscoresKeywordPage />;
}
