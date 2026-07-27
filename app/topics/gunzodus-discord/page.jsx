import GunzodusDiscordKeywordPage, { generateMetadata } from './gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusDiscordKeywordPage />;
}
