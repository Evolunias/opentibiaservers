import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-latin-america');
}

export default function PvpeSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-latin-america" />;
}
