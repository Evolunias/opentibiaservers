import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-status');
}

export default function ClassickDrakoriaStatusKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-status" />;
}
