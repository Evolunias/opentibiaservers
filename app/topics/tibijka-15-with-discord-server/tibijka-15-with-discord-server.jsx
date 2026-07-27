import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-15-with-discord-server');
}

export default function Tibijka15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-15-with-discord-server" />;
}
