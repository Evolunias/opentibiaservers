import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-carlinot-login');
}

export default function RealMapCarlinotLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-carlinot-login" />;
}
