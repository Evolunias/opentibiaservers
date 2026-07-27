import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('otservlist-alternative-real-map');
}

export default function OtservlistAlternativeRealMapKeywordPage() {
  return <StaticKeywordPage slug="otservlist-alternative-real-map" />;
}
