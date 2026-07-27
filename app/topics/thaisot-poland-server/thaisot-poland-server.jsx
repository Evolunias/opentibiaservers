import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-poland-server');
}

export default function ThaisotPolandServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-poland-server" />;
}
