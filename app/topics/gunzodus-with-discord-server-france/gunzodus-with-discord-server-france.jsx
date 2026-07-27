import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-france');
}

export default function GunzodusWithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-france" />;
}
