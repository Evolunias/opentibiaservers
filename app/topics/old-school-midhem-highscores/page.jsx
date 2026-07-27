import OldSchoolMidhemHighscoresKeywordPage, { generateMetadata } from './old-school-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMidhemHighscoresKeywordPage />;
}
