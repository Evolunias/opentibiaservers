import HighrateRangerSArcaniHighscoresKeywordPage, { generateMetadata } from './highrate-ranger-s-arcani-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateRangerSArcaniHighscoresKeywordPage />;
}
