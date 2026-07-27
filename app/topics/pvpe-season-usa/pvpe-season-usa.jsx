import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-usa');
}

export default function PvpeSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-usa" />;
}
