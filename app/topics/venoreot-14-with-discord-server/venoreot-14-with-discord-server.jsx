import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-14-with-discord-server');
}

export default function Venoreot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-14-with-discord-server" />;
}
