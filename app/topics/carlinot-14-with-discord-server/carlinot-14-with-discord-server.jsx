import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-14-with-discord-server');
}

export default function Carlinot14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-14-with-discord-server" />;
}
