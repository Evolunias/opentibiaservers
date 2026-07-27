import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-north-america');
}

export default function GunzodusWithDiscordServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-north-america" />;
}
