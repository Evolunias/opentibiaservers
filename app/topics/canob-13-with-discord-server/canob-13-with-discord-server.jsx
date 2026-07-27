import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-13-with-discord-server');
}

export default function Canob13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-13-with-discord-server" />;
}
