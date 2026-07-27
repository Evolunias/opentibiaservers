import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiascape-10-0-with-discord-server');
}

export default function Tibiascape100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiascape-10-0-with-discord-server" />;
}
