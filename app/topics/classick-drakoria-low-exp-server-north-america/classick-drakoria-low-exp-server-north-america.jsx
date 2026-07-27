import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-north-america');
}

export default function ClassickDrakoriaLowExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-north-america" />;
}
