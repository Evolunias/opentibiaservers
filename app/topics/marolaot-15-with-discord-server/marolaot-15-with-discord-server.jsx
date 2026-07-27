import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-15-with-discord-server');
}

export default function Marolaot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-15-with-discord-server" />;
}
