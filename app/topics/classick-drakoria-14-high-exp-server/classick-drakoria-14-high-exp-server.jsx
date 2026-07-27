import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-high-exp-server');
}

export default function ClassickDrakoria14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-high-exp-server" />;
}
