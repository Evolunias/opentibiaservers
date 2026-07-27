import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-brazil');
}

export default function ElderaWithDiscordServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-brazil" />;
}
