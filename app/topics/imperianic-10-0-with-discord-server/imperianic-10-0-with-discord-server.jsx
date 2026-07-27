import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-with-discord-server');
}

export default function Imperianic100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-with-discord-server" />;
}
