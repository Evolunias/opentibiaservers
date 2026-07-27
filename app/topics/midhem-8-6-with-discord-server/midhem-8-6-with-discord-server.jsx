import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-6-with-discord-server');
}

export default function Midhem86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-6-with-discord-server" />;
}
