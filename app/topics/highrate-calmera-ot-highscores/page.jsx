import HighrateCalmeraOtHighscoresKeywordPage, { generateMetadata } from './highrate-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCalmeraOtHighscoresKeywordPage />;
}
