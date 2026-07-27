import HighrateCanobHighscoresKeywordPage, { generateMetadata } from './highrate-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCanobHighscoresKeywordPage />;
}
