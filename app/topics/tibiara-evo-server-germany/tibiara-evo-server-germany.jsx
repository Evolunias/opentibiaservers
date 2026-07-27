import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-evo-server-germany');
}

export default function TibiaraEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiara-evo-server-germany" />;
}
