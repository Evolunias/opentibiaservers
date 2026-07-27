import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-north-america');
}

export default function PvpeStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-north-america" />;
}
