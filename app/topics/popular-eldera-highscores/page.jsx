import PopularElderaHighscoresKeywordPage, { generateMetadata } from './popular-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularElderaHighscoresKeywordPage />;
}
