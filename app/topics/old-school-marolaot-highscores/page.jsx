import OldSchoolMarolaotHighscoresKeywordPage, { generateMetadata } from './old-school-marolaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolMarolaotHighscoresKeywordPage />;
}
