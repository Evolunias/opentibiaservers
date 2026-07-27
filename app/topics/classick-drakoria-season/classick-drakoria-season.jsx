import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('classick-drakoria-season');
}

export default function ClassickDrakoriaSeasonKeywordPage() {
  return <StaticKeywordPage slug="classick-drakoria-season" />;
}
