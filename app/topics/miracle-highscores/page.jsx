import MiracleHighscoresKeywordPage, { generateMetadata } from './miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleHighscoresKeywordPage />;
}
