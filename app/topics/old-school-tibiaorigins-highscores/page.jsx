import OldSchoolTibiaoriginsHighscoresKeywordPage, { generateMetadata } from './old-school-tibiaorigins-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaoriginsHighscoresKeywordPage />;
}
