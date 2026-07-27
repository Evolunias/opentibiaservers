import CustomVenoreotHighscoresKeywordPage, { generateMetadata } from './custom-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomVenoreotHighscoresKeywordPage />;
}
