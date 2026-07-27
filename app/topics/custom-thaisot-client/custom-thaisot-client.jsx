import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-thaisot-client');
}

export default function CustomThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="custom-thaisot-client" />;
}
