import OldSchoolKasteriaHighscoresKeywordPage, { generateMetadata } from './old-school-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolKasteriaHighscoresKeywordPage />;
}
