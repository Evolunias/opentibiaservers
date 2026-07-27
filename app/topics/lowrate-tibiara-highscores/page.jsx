import LowrateTibiaraHighscoresKeywordPage, { generateMetadata } from './lowrate-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraHighscoresKeywordPage />;
}
