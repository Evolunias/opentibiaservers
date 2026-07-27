import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-germany');
}

export default function PvpeStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-germany" />;
}
