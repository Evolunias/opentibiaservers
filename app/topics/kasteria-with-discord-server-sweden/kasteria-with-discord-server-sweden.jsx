import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-with-discord-server-sweden');
}

export default function KasteriaWithDiscordServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="kasteria-with-discord-server-sweden" />;
}
