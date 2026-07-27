import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-11-with-discord-server');
}

export default function Carlinot11WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-11-with-discord-server" />;
}
