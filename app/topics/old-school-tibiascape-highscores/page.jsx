import OldSchoolTibiascapeHighscoresKeywordPage, { generateMetadata } from './old-school-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiascapeHighscoresKeywordPage />;
}
