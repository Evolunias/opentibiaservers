import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-season-france');
}

export default function PvpeSeasonFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-season-france" />;
}
