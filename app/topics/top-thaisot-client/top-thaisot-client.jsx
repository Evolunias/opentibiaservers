import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-thaisot-client');
}

export default function TopThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="top-thaisot-client" />;
}
