import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-7-6-with-discord-server');
}

export default function Eldera76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-7-6-with-discord-server" />;
}
