import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-north-america');
}

export default function AureraGlobalRealMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-north-america" />;
}
