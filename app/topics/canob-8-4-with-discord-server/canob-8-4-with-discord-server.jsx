import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-4-with-discord-server');
}

export default function Canob84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-4-with-discord-server" />;
}
