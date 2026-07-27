import PopularOlderaHighscoresKeywordPage, { generateMetadata } from './popular-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOlderaHighscoresKeywordPage />;
}
