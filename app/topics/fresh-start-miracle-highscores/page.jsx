import FreshStartMiracleHighscoresKeywordPage, { generateMetadata } from './fresh-start-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMiracleHighscoresKeywordPage />;
}
