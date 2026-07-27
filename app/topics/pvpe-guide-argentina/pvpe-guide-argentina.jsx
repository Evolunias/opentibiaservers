import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-guide-argentina');
}

export default function PvpeGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-guide-argentina" />;
}
