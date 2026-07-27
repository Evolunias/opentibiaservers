import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-7-4-with-discord-server');
}

export default function Tibijka74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-7-4-with-discord-server" />;
}
