import HighrateOriginaltibiaHighscoresKeywordPage, { generateMetadata } from './highrate-originaltibia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateOriginaltibiaHighscoresKeywordPage />;
}
