import OldSchoolOxygenotHighscoresKeywordPage, { generateMetadata } from './old-school-oxygenot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolOxygenotHighscoresKeywordPage />;
}
