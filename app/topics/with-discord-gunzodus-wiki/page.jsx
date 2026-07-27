import WithDiscordGunzodusWikiKeywordPage, { generateMetadata } from './with-discord-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithDiscordGunzodusWikiKeywordPage />;
}
