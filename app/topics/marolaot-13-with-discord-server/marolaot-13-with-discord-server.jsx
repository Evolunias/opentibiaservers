import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-13-with-discord-server');
}

export default function Marolaot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-13-with-discord-server" />;
}
