import HighrateNepreniaHighscoresKeywordPage, { generateMetadata } from './highrate-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateNepreniaHighscoresKeywordPage />;
}
