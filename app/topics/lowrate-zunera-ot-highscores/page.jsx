import LowrateZuneraOtHighscoresKeywordPage, { generateMetadata } from './lowrate-zunera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateZuneraOtHighscoresKeywordPage />;
}
