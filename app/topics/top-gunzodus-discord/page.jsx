import TopGunzodusDiscordKeywordPage, { generateMetadata } from './top-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopGunzodusDiscordKeywordPage />;
}
