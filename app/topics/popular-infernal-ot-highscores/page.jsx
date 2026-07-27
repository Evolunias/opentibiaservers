import PopularInfernalOtHighscoresKeywordPage, { generateMetadata } from './popular-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularInfernalOtHighscoresKeywordPage />;
}
