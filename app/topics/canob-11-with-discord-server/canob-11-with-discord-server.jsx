import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-11-with-discord-server');
}

export default function Canob11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-11-with-discord-server" />;
}
