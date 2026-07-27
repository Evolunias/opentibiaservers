import HighrateZuneraOtHighscoresKeywordPage, { generateMetadata } from './highrate-zunera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateZuneraOtHighscoresKeywordPage />;
}
