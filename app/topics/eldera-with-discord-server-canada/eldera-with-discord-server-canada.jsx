import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-canada');
}

export default function ElderaWithDiscordServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-canada" />;
}
