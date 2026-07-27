import OldSchoolCalmeraOtHighscoresKeywordPage, { generateMetadata } from './old-school-calmera-ot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCalmeraOtHighscoresKeywordPage />;
}
