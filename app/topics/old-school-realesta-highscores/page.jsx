import OldSchoolRealestaHighscoresKeywordPage, { generateMetadata } from './old-school-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealestaHighscoresKeywordPage />;
}
