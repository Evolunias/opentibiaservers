import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-14-with-discord-server');
}

export default function Canob14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-14-with-discord-server" />;
}
