import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-1-with-discord-server');
}

export default function Tibijka81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-1-with-discord-server" />;
}
