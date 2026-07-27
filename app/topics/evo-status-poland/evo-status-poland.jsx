import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-poland');
}

export default function EvoStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="evo-status-poland" />;
}
