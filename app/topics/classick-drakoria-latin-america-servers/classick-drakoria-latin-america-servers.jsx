import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-latin-america-servers');
}

export default function ClassickDrakoriaLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-latin-america-servers" />;
}
