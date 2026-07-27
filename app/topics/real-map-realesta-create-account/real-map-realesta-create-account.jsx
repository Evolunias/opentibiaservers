import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-create-account');
}

export default function RealMapRealestaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-create-account" />;
}
