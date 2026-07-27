import OldSchoolThorniaHighscoresKeywordPage, { generateMetadata } from './old-school-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolThorniaHighscoresKeywordPage />;
}
