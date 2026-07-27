import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-7-6-with-discord-server');
}

export default function Midhem76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-7-6-with-discord-server" />;
}
