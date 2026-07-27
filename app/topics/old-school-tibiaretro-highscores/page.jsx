import OldSchoolTibiaretroHighscoresKeywordPage, { generateMetadata } from './old-school-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiaretroHighscoresKeywordPage />;
}
