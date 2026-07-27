import CurrentMadnessaliveHighscoresKeywordPage, { generateMetadata } from './current-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentMadnessaliveHighscoresKeywordPage />;
}
