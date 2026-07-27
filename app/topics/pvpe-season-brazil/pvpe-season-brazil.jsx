import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-brazil');
}

export default function PvpeSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-brazil" />;
}
