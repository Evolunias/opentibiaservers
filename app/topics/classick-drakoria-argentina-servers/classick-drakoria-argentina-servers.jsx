import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-argentina-servers');
}

export default function ClassickDrakoriaArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-argentina-servers" />;
}
