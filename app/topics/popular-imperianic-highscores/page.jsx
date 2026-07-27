import PopularImperianicHighscoresKeywordPage, { generateMetadata } from './popular-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularImperianicHighscoresKeywordPage />;
}
