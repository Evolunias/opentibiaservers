import PopularCalmeraOtHighscoresKeywordPage, { generateMetadata } from './popular-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCalmeraOtHighscoresKeywordPage />;
}
