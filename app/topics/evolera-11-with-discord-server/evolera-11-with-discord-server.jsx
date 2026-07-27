import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-11-with-discord-server');
}

export default function Evolera11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-11-with-discord-server" />;
}
