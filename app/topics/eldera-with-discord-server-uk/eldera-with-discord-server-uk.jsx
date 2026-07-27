import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-with-discord-server-uk');
}

export default function ElderaWithDiscordServerUkKeywordPage() {
  return <StaticKeywordPage slug="eldera-with-discord-server-uk" />;
}
