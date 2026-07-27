import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-server-north-america');
}

export default function ClassickDrakoriaEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-server-north-america" />;
}
