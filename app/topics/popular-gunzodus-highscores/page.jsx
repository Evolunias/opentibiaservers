import PopularGunzodusHighscoresKeywordPage, { generateMetadata } from './popular-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularGunzodusHighscoresKeywordPage />;
}
