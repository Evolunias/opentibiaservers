import WithDiscordGunzodusClientKeywordPage, { generateMetadata } from './with-discord-gunzodus-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusClientKeywordPage />;
}
