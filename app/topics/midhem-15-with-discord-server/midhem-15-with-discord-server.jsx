import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-15-with-discord-server');
}

export default function Midhem15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-15-with-discord-server" />;
}
