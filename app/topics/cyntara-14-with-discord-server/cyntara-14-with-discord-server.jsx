import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-14-with-discord-server');
}

export default function Cyntara14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-14-with-discord-server" />;
}
