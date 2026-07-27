import OldSchoolTibijkaHighscoresKeywordPage, { generateMetadata } from './old-school-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibijkaHighscoresKeywordPage />;
}
