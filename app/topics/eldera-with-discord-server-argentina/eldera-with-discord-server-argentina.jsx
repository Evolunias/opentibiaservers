import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-argentina');
}

export default function ElderaWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-argentina" />;
}
