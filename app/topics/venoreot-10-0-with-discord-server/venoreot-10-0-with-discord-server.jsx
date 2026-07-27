import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-10-0-with-discord-server');
}

export default function Venoreot100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-10-0-with-discord-server" />;
}
