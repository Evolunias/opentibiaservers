import OldSchoolTibiaraHighscoresKeywordPage, { generateMetadata } from './old-school-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaraHighscoresKeywordPage />;
}
