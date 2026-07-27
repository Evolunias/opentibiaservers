import NewRealeraHighscoresKeywordPage, { generateMetadata } from './new-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewRealeraHighscoresKeywordPage />;
}
