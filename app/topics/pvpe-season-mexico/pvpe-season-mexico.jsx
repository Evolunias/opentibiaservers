import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-mexico');
}

export default function PvpeSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-mexico" />;
}
