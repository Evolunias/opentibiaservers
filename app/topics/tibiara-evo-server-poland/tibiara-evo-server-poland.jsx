import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-poland');
}

export default function TibiaraEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-poland" />;
}
