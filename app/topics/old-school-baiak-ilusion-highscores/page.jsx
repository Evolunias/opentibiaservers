import OldSchoolBaiakIlusionHighscoresKeywordPage, { generateMetadata } from './old-school-baiak-ilusion-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolBaiakIlusionHighscoresKeywordPage />;
}
