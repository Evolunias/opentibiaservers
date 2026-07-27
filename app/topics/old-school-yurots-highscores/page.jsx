import OldSchoolYurotsHighscoresKeywordPage, { generateMetadata } from './old-school-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolYurotsHighscoresKeywordPage />;
}
