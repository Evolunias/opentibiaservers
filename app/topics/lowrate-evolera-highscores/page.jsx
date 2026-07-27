import LowrateEvoleraHighscoresKeywordPage, { generateMetadata } from './lowrate-evolera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateEvoleraHighscoresKeywordPage />;
}
