import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classicus-high-exp-server-mexico');
}

export default function ClassicusHighExpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="classicus-high-exp-server-mexico" />;
}
