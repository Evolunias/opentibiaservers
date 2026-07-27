import TopTibiaraHighscoresKeywordPage, { generateMetadata } from './top-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiaraHighscoresKeywordPage />;
}
