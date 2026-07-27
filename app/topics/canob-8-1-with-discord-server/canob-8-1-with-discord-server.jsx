import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-1-with-discord-server');
}

export default function Canob81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-1-with-discord-server" />;
}
