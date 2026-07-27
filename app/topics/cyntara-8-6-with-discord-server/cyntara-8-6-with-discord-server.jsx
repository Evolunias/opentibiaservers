import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-6-with-discord-server');
}

export default function Cyntara86WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-6-with-discord-server" />;
}
