import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-north-america');
}

export default function AureraGlobalRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-north-america" />;
}
