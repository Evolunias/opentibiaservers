import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-poland');
}

export default function ElderaWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-poland" />;
}
