import GunzodusHighscoresKeywordPage, { generateMetadata } from './gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusHighscoresKeywordPage />;
}
