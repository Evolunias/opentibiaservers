import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-13-with-discord-server');
}

export default function Venoreot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-13-with-discord-server" />;
}
