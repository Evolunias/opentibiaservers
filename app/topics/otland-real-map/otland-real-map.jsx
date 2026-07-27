import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otland-real-map');
}

export default function OtlandRealMapKeywordPage() {
  return <StaticKeywordPage slug="otland-real-map" />;
}
