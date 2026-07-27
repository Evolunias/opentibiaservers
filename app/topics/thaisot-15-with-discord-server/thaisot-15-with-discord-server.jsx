import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-15-with-discord-server');
}

export default function Thaisot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-15-with-discord-server" />;
}
