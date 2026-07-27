import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-evo-servers-usa');
}

export default function ClassickDrakoriaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-evo-servers-usa" />;
}
