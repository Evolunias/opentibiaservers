import CustomHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './custom-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtHighscoresKeywordPage />;
}
