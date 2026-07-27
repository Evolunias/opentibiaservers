import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-12-with-discord-server');
}

export default function Evolera12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-12-with-discord-server" />;
}
