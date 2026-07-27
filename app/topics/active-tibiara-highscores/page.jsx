import ActiveTibiaraHighscoresKeywordPage, { generateMetadata } from './active-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveTibiaraHighscoresKeywordPage />;
}
