import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-10-0-high-exp-server');
}

export default function ClassickDrakoria100HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-10-0-high-exp-server" />;
}
