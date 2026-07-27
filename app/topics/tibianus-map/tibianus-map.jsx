import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-map');
}

export default function TibianusMapKeywordPage() {
  return <StaticKeywordPage slug="tibianus-map" />;
}
