import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-high-exp-server-north-america');
}

export default function ClassickDrakoriaHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-high-exp-server-north-america" />;
}
