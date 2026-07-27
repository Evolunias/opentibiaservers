import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-9-6-with-discord-server');
}

export default function Rubinot96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-9-6-with-discord-server" />;
}
