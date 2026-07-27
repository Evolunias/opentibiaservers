import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-real-map');
}

export default function OtservlistRealMapKeywordPage() {
  return <StaticKeywordPage slug="otservlist-real-map" />;
}
