import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-real-map-servers-latin-america');
}

export default function AureraGlobalRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-real-map-servers-latin-america" />;
}
