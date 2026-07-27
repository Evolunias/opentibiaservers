import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-1-with-discord-server');
}

export default function Cyntara71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-1-with-discord-server" />;
}
