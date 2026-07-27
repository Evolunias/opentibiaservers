import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-ots');
}

export default function ClassickDrakoriaOtsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-ots" />;
}
