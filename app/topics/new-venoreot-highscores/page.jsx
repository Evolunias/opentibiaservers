import NewVenoreotHighscoresKeywordPage, { generateMetadata } from './new-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewVenoreotHighscoresKeywordPage />;
}
