import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-custom-map-servers-latin-america');
}

export default function AureraGlobalCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-custom-map-servers-latin-america" />;
}
