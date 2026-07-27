import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-13-with-discord-server');
}

export default function Cyntara13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-13-with-discord-server" />;
}
