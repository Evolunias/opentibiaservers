import FreshStartOxygenotHighscoresKeywordPage, { generateMetadata } from './fresh-start-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartOxygenotHighscoresKeywordPage />;
}
