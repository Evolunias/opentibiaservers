import GunzodusGuildsKeywordPage, { generateMetadata } from './gunzodus-guilds';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <GunzodusGuildsKeywordPage />;
}
