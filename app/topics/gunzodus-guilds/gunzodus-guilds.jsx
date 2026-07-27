import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-guilds');
}

export default function GunzodusGuildsKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-guilds" />;
}
