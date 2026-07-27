import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-1-with-discord-server');
}

export default function Thaisot71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-1-with-discord-server" />;
}
