import NoResetMiracleHighscoresKeywordPage, { generateMetadata } from './no-reset-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMiracleHighscoresKeywordPage />;
}
