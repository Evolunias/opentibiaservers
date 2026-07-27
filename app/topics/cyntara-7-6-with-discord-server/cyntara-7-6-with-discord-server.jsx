import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('cyntara-7-6-with-discord-server');
}

export default function Cyntara76WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="cyntara-7-6-with-discord-server" />;
}
