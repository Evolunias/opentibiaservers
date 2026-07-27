import LowrateRealeraHighscoresKeywordPage, { generateMetadata } from './lowrate-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateRealeraHighscoresKeywordPage />;
}
