import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-north-america');
}

export default function EvoStatusNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-status-north-america" />;
}
