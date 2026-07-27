import PopularRealeraHighscoresKeywordPage, { generateMetadata } from './popular-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealeraHighscoresKeywordPage />;
}
