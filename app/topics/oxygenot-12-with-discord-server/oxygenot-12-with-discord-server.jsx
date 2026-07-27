import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-12-with-discord-server');
}

export default function Oxygenot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-12-with-discord-server" />;
}
