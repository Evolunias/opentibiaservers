import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('marolaot-14-with-discord-server');
}

export default function Marolaot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="marolaot-14-with-discord-server" />;
}
