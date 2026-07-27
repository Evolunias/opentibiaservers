import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-with-discord-server');
}

export default function Imperianic15WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-with-discord-server" />;
}
