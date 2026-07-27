import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-98-low-exp-server');
}

export default function ClassickDrakoria1098LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-98-low-exp-server" />;
}
