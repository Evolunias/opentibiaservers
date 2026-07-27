import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-10-0-with-discord-server');
}

export default function Carlinot100WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-10-0-with-discord-server" />;
}
