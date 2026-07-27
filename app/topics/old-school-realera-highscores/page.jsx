import OldSchoolRealeraHighscoresKeywordPage, { generateMetadata } from './old-school-realera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolRealeraHighscoresKeywordPage />;
}
