import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-8-6-with-discord-server');
}

export default function Thaisot86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-8-6-with-discord-server" />;
}
