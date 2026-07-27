import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-north-america');
}

export default function PvpeSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-north-america" />;
}
