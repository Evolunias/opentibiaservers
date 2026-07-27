import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-server-latin-america');
}

export default function AureraGlobalRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-server-latin-america" />;
}
