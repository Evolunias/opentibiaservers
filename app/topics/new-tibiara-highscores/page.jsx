import NewTibiaraHighscoresKeywordPage, { generateMetadata } from './new-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraHighscoresKeywordPage />;
}
