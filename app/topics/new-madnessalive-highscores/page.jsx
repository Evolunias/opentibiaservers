import NewMadnessaliveHighscoresKeywordPage, { generateMetadata } from './new-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewMadnessaliveHighscoresKeywordPage />;
}
