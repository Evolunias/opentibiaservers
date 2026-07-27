import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-7-1-with-discord-server');
}

export default function Carlinot71WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="carlinot-7-1-with-discord-server" />;
}
