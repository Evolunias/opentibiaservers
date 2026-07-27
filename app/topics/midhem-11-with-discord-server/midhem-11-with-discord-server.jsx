import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-11-with-discord-server');
}

export default function Midhem11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-11-with-discord-server" />;
}
