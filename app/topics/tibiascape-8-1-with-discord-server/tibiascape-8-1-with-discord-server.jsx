import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-8-1-with-discord-server');
}

export default function Tibiascape81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-8-1-with-discord-server" />;
}
