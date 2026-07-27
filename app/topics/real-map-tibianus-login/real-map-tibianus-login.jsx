import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibianus-login');
}

export default function RealMapTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibianus-login" />;
}
