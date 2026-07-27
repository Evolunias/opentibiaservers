import ActiveVenoreotHighscoresKeywordPage, { generateMetadata } from './active-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveVenoreotHighscoresKeywordPage />;
}
