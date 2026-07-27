import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-medivia-login');
}

export default function RealMapMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-medivia-login" />;
}
