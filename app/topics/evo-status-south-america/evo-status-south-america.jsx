import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-south-america');
}

export default function EvoStatusSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evo-status-south-america" />;
}
