import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-11-with-discord-server');
}

export default function Marolaot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-11-with-discord-server" />;
}
