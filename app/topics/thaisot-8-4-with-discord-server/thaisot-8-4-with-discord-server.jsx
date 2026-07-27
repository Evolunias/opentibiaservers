import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-4-with-discord-server');
}

export default function Thaisot84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-4-with-discord-server" />;
}
