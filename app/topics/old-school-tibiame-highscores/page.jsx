import OldSchoolTibiameHighscoresKeywordPage, { generateMetadata } from './old-school-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolTibiameHighscoresKeywordPage />;
}
