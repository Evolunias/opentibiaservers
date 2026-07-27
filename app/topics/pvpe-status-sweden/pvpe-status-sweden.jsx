import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-sweden');
}

export default function PvpeStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-sweden" />;
}
