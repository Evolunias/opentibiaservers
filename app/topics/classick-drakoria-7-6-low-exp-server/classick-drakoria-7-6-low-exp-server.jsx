import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-7-6-low-exp-server');
}

export default function ClassickDrakoria76LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-7-6-low-exp-server" />;
}
