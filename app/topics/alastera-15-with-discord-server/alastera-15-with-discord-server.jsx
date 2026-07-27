import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-15-with-discord-server');
}

export default function Alastera15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="alastera-15-with-discord-server" />;
}
