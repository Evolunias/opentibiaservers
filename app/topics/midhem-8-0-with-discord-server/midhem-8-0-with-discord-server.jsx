import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-0-with-discord-server');
}

export default function Midhem80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-0-with-discord-server" />;
}
