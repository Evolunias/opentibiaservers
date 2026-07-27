import OldSchoolTibianusHighscoresKeywordPage, { generateMetadata } from './old-school-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibianusHighscoresKeywordPage />;
}
