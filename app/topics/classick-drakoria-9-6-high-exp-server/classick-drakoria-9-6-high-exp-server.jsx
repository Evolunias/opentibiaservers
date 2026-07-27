import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-9-6-high-exp-server');
}

export default function ClassickDrakoria96HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-9-6-high-exp-server" />;
}
