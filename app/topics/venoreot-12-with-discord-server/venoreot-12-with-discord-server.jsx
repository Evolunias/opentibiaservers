import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('venoreot-12-with-discord-server');
}

export default function Venoreot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="venoreot-12-with-discord-server" />;
}
