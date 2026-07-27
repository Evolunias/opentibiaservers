import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-8-0-with-discord-server');
}

export default function Evolera80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-8-0-with-discord-server" />;
}
