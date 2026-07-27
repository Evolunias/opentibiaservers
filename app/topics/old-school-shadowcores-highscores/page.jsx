import OldSchoolShadowcoresHighscoresKeywordPage, { generateMetadata } from './old-school-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolShadowcoresHighscoresKeywordPage />;
}
