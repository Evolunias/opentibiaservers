import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-client');
}

export default function ClassickDrakoriaClientKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-client" />;
}
