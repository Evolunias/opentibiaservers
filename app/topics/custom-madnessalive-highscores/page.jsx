import CustomMadnessaliveHighscoresKeywordPage, { generateMetadata } from './custom-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMadnessaliveHighscoresKeywordPage />;
}
