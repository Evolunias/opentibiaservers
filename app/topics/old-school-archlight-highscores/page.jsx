import OldSchoolArchlightHighscoresKeywordPage, { generateMetadata } from './old-school-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolArchlightHighscoresKeywordPage />;
}
