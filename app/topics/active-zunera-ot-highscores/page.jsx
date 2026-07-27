import ActiveZuneraOtHighscoresKeywordPage, { generateMetadata } from './active-zunera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveZuneraOtHighscoresKeywordPage />;
}
