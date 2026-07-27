import OldSchoolSerenityHighscoresKeywordPage, { generateMetadata } from './old-school-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSerenityHighscoresKeywordPage />;
}
