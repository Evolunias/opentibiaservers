import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-6-high-exp-server');
}

export default function ClassickDrakoria86HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-6-high-exp-server" />;
}
