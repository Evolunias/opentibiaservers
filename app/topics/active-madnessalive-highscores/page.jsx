import ActiveMadnessaliveHighscoresKeywordPage, { generateMetadata } from './active-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveMadnessaliveHighscoresKeywordPage />;
}
