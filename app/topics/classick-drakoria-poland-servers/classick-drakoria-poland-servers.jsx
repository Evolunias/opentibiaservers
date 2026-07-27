import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-poland-servers');
}

export default function ClassickDrakoriaPolandServersKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-poland-servers" />;
}
