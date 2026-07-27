import LowrateGunzodusHighscoresKeywordPage, { generateMetadata } from './lowrate-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateGunzodusHighscoresKeywordPage />;
}
