import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-germany');
}

export default function ElderaWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-germany" />;
}
