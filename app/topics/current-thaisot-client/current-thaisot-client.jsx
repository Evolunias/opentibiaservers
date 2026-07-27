import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thaisot-client');
}

export default function CurrentThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="current-thaisot-client" />;
}
