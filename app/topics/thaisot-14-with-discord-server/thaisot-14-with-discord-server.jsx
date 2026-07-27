import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-14-with-discord-server');
}

export default function Thaisot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-14-with-discord-server" />;
}
