import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-usa');
}

export default function EvoStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="evo-status-usa" />;
}
