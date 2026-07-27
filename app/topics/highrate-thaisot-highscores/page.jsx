import HighrateThaisotHighscoresKeywordPage, { generateMetadata } from './highrate-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateThaisotHighscoresKeywordPage />;
}
