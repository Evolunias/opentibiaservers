import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-south-america');
}

export default function PvpeStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-south-america" />;
}
