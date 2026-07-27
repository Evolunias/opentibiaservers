import OldSchoolDuraOnlineHighscoresKeywordPage, { generateMetadata } from './old-school-dura-online-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolDuraOnlineHighscoresKeywordPage />;
}
