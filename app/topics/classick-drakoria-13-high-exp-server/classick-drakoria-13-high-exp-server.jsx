import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-13-high-exp-server');
}

export default function ClassickDrakoria13HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-13-high-exp-server" />;
}
