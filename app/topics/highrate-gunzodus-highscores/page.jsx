import HighrateGunzodusHighscoresKeywordPage, { generateMetadata } from './highrate-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateGunzodusHighscoresKeywordPage />;
}
