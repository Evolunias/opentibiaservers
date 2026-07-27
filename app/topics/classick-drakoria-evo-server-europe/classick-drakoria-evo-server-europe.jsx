import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-europe');
}

export default function ClassickDrakoriaEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-europe" />;
}
