import HighrateTibiaraHighscoresKeywordPage, { generateMetadata } from './highrate-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraHighscoresKeywordPage />;
}
