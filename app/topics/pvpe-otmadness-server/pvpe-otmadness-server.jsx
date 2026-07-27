import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-otmadness-server');
}

export default function PvpeOtmadnessServerKeywordPage() {
  return <StaticKeywordPage slug="pvpe-otmadness-server" />;
}
