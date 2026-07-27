import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-usa');
}

export default function PvpeStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-usa" />;
}
