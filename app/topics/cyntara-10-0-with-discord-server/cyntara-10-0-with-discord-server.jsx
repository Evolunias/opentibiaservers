import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-10-0-with-discord-server');
}

export default function Cyntara100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-10-0-with-discord-server" />;
}
