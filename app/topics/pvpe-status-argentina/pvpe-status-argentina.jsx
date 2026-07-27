import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-argentina');
}

export default function PvpeStatusArgentinaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-argentina" />;
}
