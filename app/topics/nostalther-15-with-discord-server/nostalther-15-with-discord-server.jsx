import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-15-with-discord-server');
}

export default function Nostalther15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="nostalther-15-with-discord-server" />;
}
