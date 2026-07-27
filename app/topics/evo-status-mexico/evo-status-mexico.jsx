import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evo-status-mexico');
}

export default function EvoStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="evo-status-mexico" />;
}
