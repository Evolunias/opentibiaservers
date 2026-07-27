import PopularMadnessaliveHighscoresKeywordPage, { generateMetadata } from './popular-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveHighscoresKeywordPage />;
}
