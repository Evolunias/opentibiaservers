import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('pvpe-status-latin-america');
}

export default function PvpeStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="pvpe-status-latin-america" />;
}
