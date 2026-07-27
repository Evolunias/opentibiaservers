import OfficialInfernalOtHighscoresKeywordPage, { generateMetadata } from './official-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialInfernalOtHighscoresKeywordPage />;
}
