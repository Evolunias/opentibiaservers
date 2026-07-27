import WithDiscordGunzodusDiscordKeywordPage, { generateMetadata } from './with-discord-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusDiscordKeywordPage />;
}
