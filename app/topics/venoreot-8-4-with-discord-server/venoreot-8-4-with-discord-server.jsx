import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-8-4-with-discord-server');
}

export default function Venoreot84WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-8-4-with-discord-server" />;
}
