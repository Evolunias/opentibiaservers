import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-poland-server');
}

export default function ClassickDrakoriaPolandServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-poland-server" />;
}
