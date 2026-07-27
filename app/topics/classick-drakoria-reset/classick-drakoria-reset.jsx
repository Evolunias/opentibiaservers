import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-reset');
}

export default function ClassickDrakoriaResetKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-reset" />;
}
