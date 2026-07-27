import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-1-low-exp-server');
}

export default function ClassickDrakoria81LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-1-low-exp-server" />;
}
