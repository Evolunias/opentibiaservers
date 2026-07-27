import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-usa-servers');
}

export default function ClassickDrakoriaUsaServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-usa-servers" />;
}
