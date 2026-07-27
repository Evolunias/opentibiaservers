import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-4-with-discord-server');
}

export default function Eldera84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-4-with-discord-server" />;
}
