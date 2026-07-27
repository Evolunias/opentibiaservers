import OldSchoolBlazeraHighscoresKeywordPage, { generateMetadata } from './old-school-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBlazeraHighscoresKeywordPage />;
}
