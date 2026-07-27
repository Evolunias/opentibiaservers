import OldSchoolNepreniaHighscoresKeywordPage, { generateMetadata } from './old-school-neprenia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolNepreniaHighscoresKeywordPage />;
}
