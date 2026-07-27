import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-europe');
}

export default function EvoStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="evo-status-europe" />;
}
