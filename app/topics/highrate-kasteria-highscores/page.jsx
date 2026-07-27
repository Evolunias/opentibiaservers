import HighrateKasteriaHighscoresKeywordPage, { generateMetadata } from './highrate-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateKasteriaHighscoresKeywordPage />;
}
