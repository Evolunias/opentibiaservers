import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-11-with-discord-server');
}

export default function Tibijka11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-11-with-discord-server" />;
}
