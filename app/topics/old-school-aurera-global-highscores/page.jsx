import OldSchoolAureraGlobalHighscoresKeywordPage, { generateMetadata } from './old-school-aurera-global-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAureraGlobalHighscoresKeywordPage />;
}
