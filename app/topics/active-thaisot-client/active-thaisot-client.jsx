import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-thaisot-client');
}

export default function ActiveThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="active-thaisot-client" />;
}
