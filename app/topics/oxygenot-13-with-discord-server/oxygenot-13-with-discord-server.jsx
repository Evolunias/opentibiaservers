import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-13-with-discord-server');
}

export default function Oxygenot13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-13-with-discord-server" />;
}
