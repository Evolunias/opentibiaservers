import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-chile');
}

export default function PvpeGuideChileKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-chile" />;
}
