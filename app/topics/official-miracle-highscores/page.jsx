import OfficialMiracleHighscoresKeywordPage, { generateMetadata } from './official-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialMiracleHighscoresKeywordPage />;
}
