import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-wars');
}

export default function ClassickDrakoriaWarsKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-wars" />;
}
