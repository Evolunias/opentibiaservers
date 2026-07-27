import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-14-with-discord-server');
}

export default function Evolera14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-14-with-discord-server" />;
}
