import NewSeasonVenoreotHighscoresKeywordPage, { generateMetadata } from './new-season-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonVenoreotHighscoresKeywordPage />;
}
