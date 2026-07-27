import OldSchoolInfernalOtHighscoresKeywordPage, { generateMetadata } from './old-school-infernal-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolInfernalOtHighscoresKeywordPage />;
}
