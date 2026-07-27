import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-13-with-discord-server');
}

export default function Evolera13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-13-with-discord-server" />;
}
