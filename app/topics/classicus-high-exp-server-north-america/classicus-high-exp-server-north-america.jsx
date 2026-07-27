import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-north-america');
}

export default function ClassicusHighExpServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-north-america" />;
}
