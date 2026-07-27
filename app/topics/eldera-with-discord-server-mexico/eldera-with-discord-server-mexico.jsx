import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-mexico');
}

export default function ElderaWithDiscordServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-mexico" />;
}
