import WithDiscordGunzodusHighscoresKeywordPage, { generateMetadata } from './with-discord-gunzodus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusHighscoresKeywordPage />;
}
