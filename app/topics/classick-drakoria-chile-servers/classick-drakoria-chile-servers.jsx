import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-chile-servers');
}

export default function ClassickDrakoriaChileServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-chile-servers" />;
}
