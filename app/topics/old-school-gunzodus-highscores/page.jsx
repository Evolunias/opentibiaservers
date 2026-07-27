import OldSchoolGunzodusHighscoresKeywordPage, { generateMetadata } from './old-school-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OldSchoolGunzodusHighscoresKeywordPage />;
}
