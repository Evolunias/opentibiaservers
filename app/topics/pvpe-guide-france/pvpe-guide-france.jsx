import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-france');
}

export default function PvpeGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-france" />;
}
