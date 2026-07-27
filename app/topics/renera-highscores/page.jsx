import ReneraHighscoresKeywordPage, { generateMetadata } from './renera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraHighscoresKeywordPage />;
}
