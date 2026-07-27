import HighrateNilotHighscoresKeywordPage, { generateMetadata } from './highrate-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNilotHighscoresKeywordPage />;
}
