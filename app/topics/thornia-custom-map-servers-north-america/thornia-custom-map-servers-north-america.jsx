import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-north-america');
}

export default function ThorniaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-north-america" />;
}
