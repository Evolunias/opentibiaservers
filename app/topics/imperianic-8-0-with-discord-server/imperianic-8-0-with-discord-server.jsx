import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-0-with-discord-server');
}

export default function Imperianic80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-0-with-discord-server" />;
}
