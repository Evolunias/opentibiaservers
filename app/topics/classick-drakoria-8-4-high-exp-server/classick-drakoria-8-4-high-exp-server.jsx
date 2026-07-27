import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-8-4-high-exp-server');
}

export default function ClassickDrakoria84HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-8-4-high-exp-server" />;
}
