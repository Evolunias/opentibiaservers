import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-12-with-discord-server');
}

export default function Canob12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-12-with-discord-server" />;
}
