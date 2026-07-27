import OldSchoolMadnessaliveHighscoresKeywordPage, { generateMetadata } from './old-school-madnessalive-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMadnessaliveHighscoresKeywordPage />;
}
