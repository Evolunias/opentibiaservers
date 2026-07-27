import BestGunzodusHighscoresKeywordPage, { generateMetadata } from './best-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestGunzodusHighscoresKeywordPage />;
}
