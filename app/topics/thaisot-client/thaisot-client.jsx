import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-client');
}

export default function ThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="thaisot-client" />;
}
