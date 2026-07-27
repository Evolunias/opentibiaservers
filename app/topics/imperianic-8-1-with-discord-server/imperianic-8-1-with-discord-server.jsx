import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-1-with-discord-server');
}

export default function Imperianic81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-1-with-discord-server" />;
}
