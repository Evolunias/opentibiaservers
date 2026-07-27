import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('gunzodus-with-discord-server-sweden');
}

export default function GunzodusWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="gunzodus-with-discord-server-sweden" />;
}
