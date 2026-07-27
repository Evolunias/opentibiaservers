import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-6-with-discord-server');
}

export default function Evolera86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-6-with-discord-server" />;
}
