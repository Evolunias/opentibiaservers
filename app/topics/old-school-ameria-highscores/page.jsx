import OldSchoolAmeriaHighscoresKeywordPage, { generateMetadata } from './old-school-ameria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolAmeriaHighscoresKeywordPage />;
}
