import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-europe');
}

export default function PvpeGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-europe" />;
}
