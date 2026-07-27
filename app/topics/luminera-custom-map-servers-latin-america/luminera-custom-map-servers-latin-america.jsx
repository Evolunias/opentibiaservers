import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-latin-america');
}

export default function LumineraCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-latin-america" />;
}
