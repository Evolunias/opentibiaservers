import PopularVenoreotHighscoresKeywordPage, { generateMetadata } from './popular-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularVenoreotHighscoresKeywordPage />;
}
