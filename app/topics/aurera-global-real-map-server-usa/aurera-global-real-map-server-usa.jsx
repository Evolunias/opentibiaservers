import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-usa');
}

export default function AureraGlobalRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-usa" />;
}
