import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('eldera-14-with-discord-server');
}

export default function Eldera14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="eldera-14-with-discord-server" />;
}
