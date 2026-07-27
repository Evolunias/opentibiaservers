import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-latin-america-server');
}

export default function ClassickDrakoriaLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-latin-america-server" />;
}
