import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-low-exp-server-usa');
}

export default function ClassickDrakoriaLowExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-low-exp-server-usa" />;
}
