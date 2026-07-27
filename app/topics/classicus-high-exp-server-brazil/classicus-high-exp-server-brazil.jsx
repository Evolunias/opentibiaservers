import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-brazil');
}

export default function ClassicusHighExpServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-brazil" />;
}
