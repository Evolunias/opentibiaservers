import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-7-4-with-discord-server');
}

export default function Canob74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-7-4-with-discord-server" />;
}
