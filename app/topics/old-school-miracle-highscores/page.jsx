import OldSchoolMiracleHighscoresKeywordPage, { generateMetadata } from './old-school-miracle-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMiracleHighscoresKeywordPage />;
}
