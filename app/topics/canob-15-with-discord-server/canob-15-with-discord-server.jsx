import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-15-with-discord-server');
}

export default function Canob15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-15-with-discord-server" />;
}
