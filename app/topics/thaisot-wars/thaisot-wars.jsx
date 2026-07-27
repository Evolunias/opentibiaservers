import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-wars');
}

export default function ThaisotWarsKeywordPage() {
  return <StaticKeywordPage slug="thaisot-wars" />;
}
