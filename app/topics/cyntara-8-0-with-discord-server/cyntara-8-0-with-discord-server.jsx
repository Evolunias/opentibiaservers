import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-8-0-with-discord-server');
}

export default function Cyntara80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-8-0-with-discord-server" />;
}
