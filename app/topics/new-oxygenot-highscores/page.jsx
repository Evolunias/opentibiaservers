import NewOxygenotHighscoresKeywordPage, { generateMetadata } from './new-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewOxygenotHighscoresKeywordPage />;
}
