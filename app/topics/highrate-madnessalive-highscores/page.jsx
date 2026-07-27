import HighrateMadnessaliveHighscoresKeywordPage, { generateMetadata } from './highrate-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateMadnessaliveHighscoresKeywordPage />;
}
