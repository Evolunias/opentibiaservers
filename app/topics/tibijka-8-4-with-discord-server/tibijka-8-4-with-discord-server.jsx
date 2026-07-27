import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-8-4-with-discord-server');
}

export default function Tibijka84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-8-4-with-discord-server" />;
}
