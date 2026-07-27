import OldSchoolDemolidoresHighscoresKeywordPage, { generateMetadata } from './old-school-demolidores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDemolidoresHighscoresKeywordPage />;
}
