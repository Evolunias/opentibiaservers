import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-uk');
}

export default function PvpeStatusUkKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-uk" />;
}
