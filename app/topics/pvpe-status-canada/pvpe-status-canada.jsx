import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-canada');
}

export default function PvpeStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-canada" />;
}
