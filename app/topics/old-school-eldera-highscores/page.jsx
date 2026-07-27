import OldSchoolElderaHighscoresKeywordPage, { generateMetadata } from './old-school-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolElderaHighscoresKeywordPage />;
}
