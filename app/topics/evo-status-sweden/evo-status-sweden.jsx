import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-sweden');
}

export default function EvoStatusSwedenKeywordPage() {
  return <StaticKeywordPage slug="evo-status-sweden" />;
}
