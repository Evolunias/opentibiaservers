import ActiveGunzodusDiscordKeywordPage, { generateMetadata } from './active-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveGunzodusDiscordKeywordPage />;
}
