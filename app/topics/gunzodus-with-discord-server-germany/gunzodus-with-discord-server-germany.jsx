import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-germany');
}

export default function GunzodusWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-germany" />;
}
