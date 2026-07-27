import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-8-54-with-discord-server');
}

export default function Eldera854WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-8-54-with-discord-server" />;
}
