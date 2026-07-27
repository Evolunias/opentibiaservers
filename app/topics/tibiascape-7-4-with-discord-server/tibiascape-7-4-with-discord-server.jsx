import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-7-4-with-discord-server');
}

export default function Tibiascape74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-7-4-with-discord-server" />;
}
