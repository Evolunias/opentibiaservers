import SoleraHighscoresKeywordPage, { generateMetadata } from './solera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraHighscoresKeywordPage />;
}
