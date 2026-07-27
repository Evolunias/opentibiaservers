import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-13-with-discord-server');
}

export default function Thaisot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-13-with-discord-server" />;
}
