import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map');
}

export default function AureraGlobalRealMapKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map" />;
}
