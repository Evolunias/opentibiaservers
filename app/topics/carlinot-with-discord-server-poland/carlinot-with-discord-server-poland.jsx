import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-poland');
}

export default function CarlinotWithDiscordServerPolandKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-poland" />;
}
