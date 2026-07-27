import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-with-discord-server');
}

export default function Imperianic11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-with-discord-server" />;
}
