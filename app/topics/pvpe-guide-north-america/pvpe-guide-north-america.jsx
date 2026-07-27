import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-north-america');
}

export default function PvpeGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-north-america" />;
}
