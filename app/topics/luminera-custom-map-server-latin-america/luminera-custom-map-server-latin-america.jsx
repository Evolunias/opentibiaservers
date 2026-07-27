import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-server-latin-america');
}

export default function LumineraCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-server-latin-america" />;
}
