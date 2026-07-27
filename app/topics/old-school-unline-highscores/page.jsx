import OldSchoolUnlineHighscoresKeywordPage, { generateMetadata } from './old-school-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolUnlineHighscoresKeywordPage />;
}
