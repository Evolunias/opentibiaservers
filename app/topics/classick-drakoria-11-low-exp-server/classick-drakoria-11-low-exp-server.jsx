import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-11-low-exp-server');
}

export default function ClassickDrakoria11LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-11-low-exp-server" />;
}
