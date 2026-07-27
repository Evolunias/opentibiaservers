import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-1-with-discord-server');
}

export default function Carlinot81WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-1-with-discord-server" />;
}
