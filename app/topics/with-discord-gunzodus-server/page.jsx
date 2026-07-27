import WithDiscordGunzodusServerKeywordPage, { generateMetadata } from './with-discord-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusServerKeywordPage />;
}
