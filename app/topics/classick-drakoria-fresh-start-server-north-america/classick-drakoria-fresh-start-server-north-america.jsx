import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-fresh-start-server-north-america');
}

export default function ClassickDrakoriaFreshStartServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-fresh-start-server-north-america" />;
}
