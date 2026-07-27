import LowrateMiracleHighscoresKeywordPage, { generateMetadata } from './lowrate-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMiracleHighscoresKeywordPage />;
}
