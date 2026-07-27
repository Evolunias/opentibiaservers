import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-poland');
}

export default function PvpeGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-poland" />;
}
