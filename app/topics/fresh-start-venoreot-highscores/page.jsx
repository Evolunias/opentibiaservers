import FreshStartVenoreotHighscoresKeywordPage, { generateMetadata } from './fresh-start-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartVenoreotHighscoresKeywordPage />;
}
