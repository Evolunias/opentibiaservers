import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-with-discord-server');
}

export default function Imperianic12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-with-discord-server" />;
}
