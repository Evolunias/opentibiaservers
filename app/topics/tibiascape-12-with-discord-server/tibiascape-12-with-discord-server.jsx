import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-12-with-discord-server');
}

export default function Tibiascape12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-12-with-discord-server" />;
}
