import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-canada');
}

export default function PvpeSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-canada" />;
}
