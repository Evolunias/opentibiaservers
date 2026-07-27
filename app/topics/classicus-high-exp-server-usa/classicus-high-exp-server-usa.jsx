import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-usa');
}

export default function ClassicusHighExpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-usa" />;
}
