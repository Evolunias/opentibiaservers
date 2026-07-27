import CurrentGunzodusHighscoresKeywordPage, { generateMetadata } from './current-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentGunzodusHighscoresKeywordPage />;
}
