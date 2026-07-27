import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-mexico');
}

export default function PvpeStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-mexico" />;
}
