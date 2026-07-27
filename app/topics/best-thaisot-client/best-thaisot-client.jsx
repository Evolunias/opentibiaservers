import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-thaisot-client');
}

export default function BestThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="best-thaisot-client" />;
}
