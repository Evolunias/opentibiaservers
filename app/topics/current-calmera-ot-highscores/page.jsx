import CurrentCalmeraOtHighscoresKeywordPage, { generateMetadata } from './current-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentCalmeraOtHighscoresKeywordPage />;
}
