import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-server-gala-real-map');
}

export default function OtlandServerGalaRealMapKeywordPage() {
  return <StaticKeywordPage slug="otland-server-gala-real-map" />;
}
