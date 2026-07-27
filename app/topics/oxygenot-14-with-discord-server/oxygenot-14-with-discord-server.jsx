import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-14-with-discord-server');
}

export default function Oxygenot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-14-with-discord-server" />;
}
