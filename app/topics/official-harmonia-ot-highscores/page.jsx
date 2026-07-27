import OfficialHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './official-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialHarmoniaOtHighscoresKeywordPage />;
}
