import WithDiscordGunzodusLoginKeywordPage, { generateMetadata } from './with-discord-gunzodus-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusLoginKeywordPage />;
}
