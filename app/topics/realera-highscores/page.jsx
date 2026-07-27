import RealeraHighscoresKeywordPage, { generateMetadata } from './realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealeraHighscoresKeywordPage />;
}
