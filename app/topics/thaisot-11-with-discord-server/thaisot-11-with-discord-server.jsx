import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-11-with-discord-server');
}

export default function Thaisot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-11-with-discord-server" />;
}
