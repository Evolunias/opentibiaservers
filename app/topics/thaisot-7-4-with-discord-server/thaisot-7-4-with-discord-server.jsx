import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-7-4-with-discord-server');
}

export default function Thaisot74WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-7-4-with-discord-server" />;
}
