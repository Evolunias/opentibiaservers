import RealMapGunzodusDiscordKeywordPage, { generateMetadata } from './real-map-gunzodus-discord';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealMapGunzodusDiscordKeywordPage />;
}
