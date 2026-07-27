import OldSchoolClassickDrakoriaHighscoresKeywordPage, { generateMetadata } from './old-school-classick-drakoria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolClassickDrakoriaHighscoresKeywordPage />;
}
