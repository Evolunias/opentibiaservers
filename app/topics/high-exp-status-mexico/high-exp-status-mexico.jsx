import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-status-mexico');
}

export default function HighExpStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="high-exp-status-mexico" />;
}
