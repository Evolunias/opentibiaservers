import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-argentina-server');
}

export default function ClassickDrakoriaArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-argentina-server" />;
}
