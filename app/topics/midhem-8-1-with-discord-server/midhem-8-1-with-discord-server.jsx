import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-8-1-with-discord-server');
}

export default function Midhem81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-8-1-with-discord-server" />;
}
