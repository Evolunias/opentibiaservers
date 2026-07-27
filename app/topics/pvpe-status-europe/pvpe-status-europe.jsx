import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-europe');
}

export default function PvpeStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-europe" />;
}
