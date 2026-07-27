import LowrateElderaHighscoresKeywordPage, { generateMetadata } from './lowrate-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateElderaHighscoresKeywordPage />;
}
