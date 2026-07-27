import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-8-0-with-discord-server');
}

export default function Canob80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-8-0-with-discord-server" />;
}
