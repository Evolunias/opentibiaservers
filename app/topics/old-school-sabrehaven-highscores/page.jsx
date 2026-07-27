import OldSchoolSabrehavenHighscoresKeywordPage, { generateMetadata } from './old-school-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolSabrehavenHighscoresKeywordPage />;
}
