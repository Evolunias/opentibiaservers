import HighrateArchlightHighscoresKeywordPage, { generateMetadata } from './highrate-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateArchlightHighscoresKeywordPage />;
}
