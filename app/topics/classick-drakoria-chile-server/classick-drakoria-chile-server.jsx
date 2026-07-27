import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-chile-server');
}

export default function ClassickDrakoriaChileServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-chile-server" />;
}
