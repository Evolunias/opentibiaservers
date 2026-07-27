import CurrentOtmadnessHighscoresKeywordPage, { generateMetadata } from './current-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentOtmadnessHighscoresKeywordPage />;
}
