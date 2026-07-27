import WithDiscordGunzodusWebsiteKeywordPage, { generateMetadata } from './with-discord-gunzodus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusWebsiteKeywordPage />;
}
