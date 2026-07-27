import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('low-exp-status-mexico');
}

export default function LowExpStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="low-exp-status-mexico" />;
}
