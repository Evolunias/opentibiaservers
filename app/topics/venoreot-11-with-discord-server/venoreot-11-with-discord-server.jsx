import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-11-with-discord-server');
}

export default function Venoreot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-11-with-discord-server" />;
}
