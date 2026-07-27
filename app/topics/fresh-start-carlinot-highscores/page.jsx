import FreshStartCarlinotHighscoresKeywordPage, { generateMetadata } from './fresh-start-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartCarlinotHighscoresKeywordPage />;
}
