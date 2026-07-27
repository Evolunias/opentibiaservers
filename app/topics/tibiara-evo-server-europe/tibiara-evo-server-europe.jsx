import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-europe');
}

export default function TibiaraEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-europe" />;
}
