import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-1-with-discord-server');
}

export default function Midhem71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-1-with-discord-server" />;
}
