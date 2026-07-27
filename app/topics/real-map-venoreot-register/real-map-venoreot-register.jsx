import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-venoreot-register');
}

export default function RealMapVenoreotRegisterKeywordPage() {
  return <StaticKeywordPage slug="real-map-venoreot-register" />;
}
