import FreshStartThaisotHighscoresKeywordPage, { generateMetadata } from './fresh-start-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartThaisotHighscoresKeywordPage />;
}
