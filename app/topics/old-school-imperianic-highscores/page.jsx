import OldSchoolImperianicHighscoresKeywordPage, { generateMetadata } from './old-school-imperianic-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolImperianicHighscoresKeywordPage />;
}
