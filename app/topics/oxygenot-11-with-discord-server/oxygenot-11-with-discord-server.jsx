import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-11-with-discord-server');
}

export default function Oxygenot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-11-with-discord-server" />;
}
