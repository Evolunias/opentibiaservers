import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-canada');
}

export default function PvpeGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-canada" />;
}
