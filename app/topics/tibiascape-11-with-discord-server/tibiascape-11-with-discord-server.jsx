import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-11-with-discord-server');
}

export default function Tibiascape11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-11-with-discord-server" />;
}
