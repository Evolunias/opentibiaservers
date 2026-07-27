import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-poland');
}

export default function GunzodusWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-poland" />;
}
