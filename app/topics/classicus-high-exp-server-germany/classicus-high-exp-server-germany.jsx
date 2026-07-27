import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-germany');
}

export default function ClassicusHighExpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-germany" />;
}
