import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thaisot-client');
}

export default function LowrateThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thaisot-client" />;
}
