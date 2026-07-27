import OldSchoolSaintsotHighscoresKeywordPage, { generateMetadata } from './old-school-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSaintsotHighscoresKeywordPage />;
}
