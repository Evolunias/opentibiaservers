import CurrentZuneraOtHighscoresKeywordPage, { generateMetadata } from './current-zunera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentZuneraOtHighscoresKeywordPage />;
}
