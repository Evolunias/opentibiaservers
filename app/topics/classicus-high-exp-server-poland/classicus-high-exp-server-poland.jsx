import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-poland');
}

export default function ClassicusHighExpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-poland" />;
}
