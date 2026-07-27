import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('carlinot-with-discord-server-europe');
}

export default function CarlinotWithDiscordServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="carlinot-with-discord-server-europe" />;
}
