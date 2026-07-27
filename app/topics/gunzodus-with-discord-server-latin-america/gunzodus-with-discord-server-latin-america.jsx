import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-latin-america');
}

export default function GunzodusWithDiscordServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-latin-america" />;
}
