import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-poland');
}

export default function PvpeStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-poland" />;
}
