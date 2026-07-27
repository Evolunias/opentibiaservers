import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-13-with-discord-server');
}

export default function Eldera13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-13-with-discord-server" />;
}
