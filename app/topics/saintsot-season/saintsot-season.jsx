import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-season');
}

export default function SaintsotSeasonKeywordPage() {
  return <StaticKeywordPage slug="saintsot-season" />;
}
