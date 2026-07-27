import PopularOtmadnessHighscoresKeywordPage, { generateMetadata } from './popular-otmadness-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOtmadnessHighscoresKeywordPage />;
}
