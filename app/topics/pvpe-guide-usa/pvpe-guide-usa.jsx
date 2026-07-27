import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-usa');
}

export default function PvpeGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-usa" />;
}
