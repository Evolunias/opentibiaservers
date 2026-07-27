import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-6-with-discord-server');
}

export default function Eldera86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-6-with-discord-server" />;
}
