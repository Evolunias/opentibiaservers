import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thaisot-europe-servers');
}

export default function ThaisotEuropeServersKeywordPage() {
  return <StaticKeywordPage slug="thaisot-europe-servers" />;
}
