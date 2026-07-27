import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-7-1-with-discord-server');
}

export default function Evolera71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-7-1-with-discord-server" />;
}
