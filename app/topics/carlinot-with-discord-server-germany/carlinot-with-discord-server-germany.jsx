import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-germany');
}

export default function CarlinotWithDiscordServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-germany" />;
}
