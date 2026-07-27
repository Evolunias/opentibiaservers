import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-1-with-discord-server');
}

export default function Cyntara81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-1-with-discord-server" />;
}
