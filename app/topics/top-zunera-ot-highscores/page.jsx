import TopZuneraOtHighscoresKeywordPage, { generateMetadata } from './top-zunera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopZuneraOtHighscoresKeywordPage />;
}
