import OldSchoolCarlinotHighscoresKeywordPage, { generateMetadata } from './old-school-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolCarlinotHighscoresKeywordPage />;
}
