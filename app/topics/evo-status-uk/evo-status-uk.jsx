import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-uk');
}

export default function EvoStatusUkKeywordPage() {
  return <StaticKeywordPage slug="evo-status-uk" />;
}
