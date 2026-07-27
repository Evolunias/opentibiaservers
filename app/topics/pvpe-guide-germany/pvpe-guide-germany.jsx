import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-germany');
}

export default function PvpeGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-germany" />;
}
