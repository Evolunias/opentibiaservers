import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-south-america');
}

export default function PvpeSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-south-america" />;
}
