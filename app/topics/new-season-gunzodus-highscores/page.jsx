import NewSeasonGunzodusHighscoresKeywordPage, { generateMetadata } from './new-season-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusHighscoresKeywordPage />;
}
