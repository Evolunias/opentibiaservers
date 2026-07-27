import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-with-discord-server');
}

export default function Tibiantis15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-with-discord-server" />;
}
