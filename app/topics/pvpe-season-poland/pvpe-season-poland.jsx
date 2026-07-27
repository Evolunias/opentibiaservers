import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-poland');
}

export default function PvpeSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-poland" />;
}
