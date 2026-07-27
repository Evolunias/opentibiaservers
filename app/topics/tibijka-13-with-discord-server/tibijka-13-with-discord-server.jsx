import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-13-with-discord-server');
}

export default function Tibijka13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-13-with-discord-server" />;
}
