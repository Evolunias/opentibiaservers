import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-thaisot-login');
}

export default function RealMapThaisotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-thaisot-login" />;
}
