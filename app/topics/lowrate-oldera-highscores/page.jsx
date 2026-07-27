import LowrateOlderaHighscoresKeywordPage, { generateMetadata } from './lowrate-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateOlderaHighscoresKeywordPage />;
}
