import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-9-6-with-discord-server');
}

export default function Tibiascape96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-9-6-with-discord-server" />;
}
