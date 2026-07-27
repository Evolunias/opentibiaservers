import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-12-with-discord-server');
}

export default function Marolaot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-12-with-discord-server" />;
}
