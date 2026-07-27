import OldSchoolLumineraHighscoresKeywordPage, { generateMetadata } from './old-school-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolLumineraHighscoresKeywordPage />;
}
