import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-canada');
}

export default function EvoStatusCanadaKeywordPage() {
  return <StaticKeywordPage slug="evo-status-canada" />;
}
