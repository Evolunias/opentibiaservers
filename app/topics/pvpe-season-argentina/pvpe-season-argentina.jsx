import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-argentina');
}

export default function PvpeSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-argentina" />;
}
