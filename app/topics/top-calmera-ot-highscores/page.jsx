import TopCalmeraOtHighscoresKeywordPage, { generateMetadata } from './top-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCalmeraOtHighscoresKeywordPage />;
}
