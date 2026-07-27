import NewSeasonGunzodusDiscordKeywordPage, { generateMetadata } from './new-season-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewSeasonGunzodusDiscordKeywordPage />;
}
