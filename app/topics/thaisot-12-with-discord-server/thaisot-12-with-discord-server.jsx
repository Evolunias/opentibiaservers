import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-12-with-discord-server');
}

export default function Thaisot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-12-with-discord-server" />;
}
