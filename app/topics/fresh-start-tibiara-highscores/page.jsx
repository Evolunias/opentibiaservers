import FreshStartTibiaraHighscoresKeywordPage, { generateMetadata } from './fresh-start-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartTibiaraHighscoresKeywordPage />;
}
