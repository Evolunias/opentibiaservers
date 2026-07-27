import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-15-with-discord-server');
}

export default function Oxygenot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-15-with-discord-server" />;
}
