import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('canob-9-6-with-discord-server');
}

export default function Canob96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="canob-9-6-with-discord-server" />;
}
