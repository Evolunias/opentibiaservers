import TopElderaHighscoresKeywordPage, { generateMetadata } from './top-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopElderaHighscoresKeywordPage />;
}
