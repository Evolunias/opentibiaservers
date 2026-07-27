import LowrateMadnessaliveHighscoresKeywordPage, { generateMetadata } from './lowrate-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateMadnessaliveHighscoresKeywordPage />;
}
