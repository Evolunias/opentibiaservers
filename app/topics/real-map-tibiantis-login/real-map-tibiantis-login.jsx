import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('real-map-tibiantis-login');
}

export default function RealMapTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="real-map-tibiantis-login" />;
}
