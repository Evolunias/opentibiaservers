import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-usa');
}

export default function ElderaWithDiscordServerUsaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-usa" />;
}
