import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-high-exp-server');
}

export default function ClassickDrakoria772HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-high-exp-server" />;
}
