import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-canada');
}

export default function ClassicusHighExpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-canada" />;
}
