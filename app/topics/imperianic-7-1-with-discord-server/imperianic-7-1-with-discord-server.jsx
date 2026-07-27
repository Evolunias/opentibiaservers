import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-with-discord-server');
}

export default function Imperianic71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-with-discord-server" />;
}
