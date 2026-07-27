import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-high-exp-server');
}

export default function ClassickDrakoria11HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-high-exp-server" />;
}
