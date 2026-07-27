import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-create-account');
}

export default function RealMapThaisotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-create-account" />;
}
