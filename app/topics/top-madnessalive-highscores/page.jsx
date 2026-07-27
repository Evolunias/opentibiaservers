import TopMadnessaliveHighscoresKeywordPage, { generateMetadata } from './top-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMadnessaliveHighscoresKeywordPage />;
}
