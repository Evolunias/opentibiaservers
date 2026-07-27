import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-uk');
}

export default function PvpeSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-uk" />;
}
