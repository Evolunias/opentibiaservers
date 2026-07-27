import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-login');
}

export default function ClassickDrakoriaLoginKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-login" />;
}
