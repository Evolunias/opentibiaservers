import OldSchoolMediviaHighscoresKeywordPage, { generateMetadata } from './old-school-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMediviaHighscoresKeywordPage />;
}
