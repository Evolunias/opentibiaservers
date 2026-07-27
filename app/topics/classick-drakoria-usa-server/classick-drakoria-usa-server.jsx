import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-usa-server');
}

export default function ClassickDrakoriaUsaServerKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-usa-server" />;
}
