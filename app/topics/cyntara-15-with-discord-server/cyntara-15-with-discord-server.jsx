import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-15-with-discord-server');
}

export default function Cyntara15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-15-with-discord-server" />;
}
