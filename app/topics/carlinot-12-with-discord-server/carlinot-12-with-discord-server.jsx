import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-12-with-discord-server');
}

export default function Carlinot12WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-12-with-discord-server" />;
}
