import NewCalmeraOtHighscoresKeywordPage, { generateMetadata } from './new-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewCalmeraOtHighscoresKeywordPage />;
}
