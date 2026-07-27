import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-realesta-login');
}

export default function RealMapRealestaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-realesta-login" />;
}
