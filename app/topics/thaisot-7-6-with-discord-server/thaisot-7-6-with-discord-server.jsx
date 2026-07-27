import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-6-with-discord-server');
}

export default function Thaisot76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-6-with-discord-server" />;
}
