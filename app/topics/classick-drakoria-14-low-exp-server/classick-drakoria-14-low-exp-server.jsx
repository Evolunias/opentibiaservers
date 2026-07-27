import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-14-low-exp-server');
}

export default function ClassickDrakoria14LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-14-low-exp-server" />;
}
