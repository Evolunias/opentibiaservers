import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-11-with-discord-server');
}

export default function Eldera11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-11-with-discord-server" />;
}
