import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-servers-latin-america');
}

export default function ThorniaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-servers-latin-america" />;
}
