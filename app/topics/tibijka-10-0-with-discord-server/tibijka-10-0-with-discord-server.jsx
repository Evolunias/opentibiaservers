import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibijka-10-0-with-discord-server');
}

export default function Tibijka100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibijka-10-0-with-discord-server" />;
}
