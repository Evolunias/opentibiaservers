import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-8-0-with-discord-server');
}

export default function Carlinot80WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-8-0-with-discord-server" />;
}
