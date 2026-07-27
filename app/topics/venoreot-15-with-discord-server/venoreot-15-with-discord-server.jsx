import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-15-with-discord-server');
}

export default function Venoreot15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-15-with-discord-server" />;
}
