import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-europe-server');
}

export default function ThaisotEuropeServerKeywordPage() {
  return <StaticKeywordPage slug="thaisot-europe-server" />;
}
