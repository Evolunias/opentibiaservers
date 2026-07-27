import OldSchoolClassicusHighscoresKeywordPage, { generateMetadata } from './old-school-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassicusHighscoresKeywordPage />;
}
