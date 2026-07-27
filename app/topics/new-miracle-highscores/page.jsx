import NewMiracleHighscoresKeywordPage, { generateMetadata } from './new-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMiracleHighscoresKeywordPage />;
}
