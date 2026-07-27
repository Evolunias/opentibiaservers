import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-15-with-discord-server');
}

export default function Evolera15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-15-with-discord-server" />;
}
