import OfficialVenoreotHighscoresKeywordPage, { generateMetadata } from './official-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialVenoreotHighscoresKeywordPage />;
}
