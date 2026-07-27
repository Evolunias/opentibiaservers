import OldSchoolHarmoniaOtHighscoresKeywordPage, { generateMetadata } from './old-school-harmonia-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolHarmoniaOtHighscoresKeywordPage />;
}
