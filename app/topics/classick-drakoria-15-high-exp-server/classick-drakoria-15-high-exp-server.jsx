import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-high-exp-server');
}

export default function ClassickDrakoria15HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-high-exp-server" />;
}
