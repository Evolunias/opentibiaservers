import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('rubinot-15-with-discord-server');
}

export default function Rubinot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="rubinot-15-with-discord-server" />;
}
