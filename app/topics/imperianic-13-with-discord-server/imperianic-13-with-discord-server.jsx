import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-with-discord-server');
}

export default function Imperianic13WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-with-discord-server" />;
}
