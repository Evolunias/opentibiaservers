import ActiveGunzodusHighscoresKeywordPage, { generateMetadata } from './active-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusHighscoresKeywordPage />;
}
