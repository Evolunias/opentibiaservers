import MadnessaliveHighscoresKeywordPage, { generateMetadata } from './madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MadnessaliveHighscoresKeywordPage />;
}
