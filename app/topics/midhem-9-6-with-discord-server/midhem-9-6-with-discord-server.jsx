import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-9-6-with-discord-server');
}

export default function Midhem96WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="midhem-9-6-with-discord-server" />;
}
