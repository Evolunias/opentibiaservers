import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('luminera-custom-map-servers-north-america');
}

export default function LumineraCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="luminera-custom-map-servers-north-america" />;
}
