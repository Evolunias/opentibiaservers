import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-real-map');
}

export default function TibianusRealMapKeywordPage() {
  return <StaticKeywordPage slug="tibianus-real-map" />;
}
