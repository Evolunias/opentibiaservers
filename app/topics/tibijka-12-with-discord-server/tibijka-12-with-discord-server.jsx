import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-12-with-discord-server');
}

export default function Tibijka12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-12-with-discord-server" />;
}
