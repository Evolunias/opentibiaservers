import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-germany');
}

export default function EvoStatusGermanyKeywordPage() {
  return <StaticKeywordPage slug="evo-status-germany" />;
}
