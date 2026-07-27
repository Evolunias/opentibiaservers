import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-15-low-exp-server');
}

export default function ClassickDrakoria15LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-15-low-exp-server" />;
}
