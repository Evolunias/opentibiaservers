import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-usa');
}

export default function AureraGlobalRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-usa" />;
}
