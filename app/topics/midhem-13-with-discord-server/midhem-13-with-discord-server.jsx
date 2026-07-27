import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-13-with-discord-server');
}

export default function Midhem13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-13-with-discord-server" />;
}
