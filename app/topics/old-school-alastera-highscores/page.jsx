import OldSchoolAlasteraHighscoresKeywordPage, { generateMetadata } from './old-school-alastera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAlasteraHighscoresKeywordPage />;
}
