import TopVenoreotHighscoresKeywordPage, { generateMetadata } from './top-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopVenoreotHighscoresKeywordPage />;
}
