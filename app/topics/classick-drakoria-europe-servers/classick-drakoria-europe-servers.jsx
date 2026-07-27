import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-europe-servers');
}

export default function ClassickDrakoriaEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-europe-servers" />;
}
