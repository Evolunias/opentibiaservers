import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-high-exp-server');
}

export default function ClassickDrakoria81HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-high-exp-server" />;
}
