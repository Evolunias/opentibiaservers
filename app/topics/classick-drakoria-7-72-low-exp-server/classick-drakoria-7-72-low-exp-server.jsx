import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-72-low-exp-server');
}

export default function ClassickDrakoria772LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-72-low-exp-server" />;
}
