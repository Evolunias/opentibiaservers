import PopularTibiaraHighscoresKeywordPage, { generateMetadata } from './popular-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiaraHighscoresKeywordPage />;
}
