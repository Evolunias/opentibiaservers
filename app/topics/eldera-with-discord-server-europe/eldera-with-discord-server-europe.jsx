import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-europe');
}

export default function ElderaWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-europe" />;
}
