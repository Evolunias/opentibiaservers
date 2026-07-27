import CustomGunzodusHighscoresKeywordPage, { generateMetadata } from './custom-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomGunzodusHighscoresKeywordPage />;
}
