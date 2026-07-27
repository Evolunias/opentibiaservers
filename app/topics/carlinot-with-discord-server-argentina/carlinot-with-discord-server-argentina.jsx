import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-argentina');
}

export default function CarlinotWithDiscordServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-argentina" />;
}
