import OldSchoolNilotHighscoresKeywordPage, { generateMetadata } from './old-school-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNilotHighscoresKeywordPage />;
}
