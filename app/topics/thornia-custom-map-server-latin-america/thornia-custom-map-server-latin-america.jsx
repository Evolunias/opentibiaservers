import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('thornia-custom-map-server-latin-america');
}

export default function ThorniaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="thornia-custom-map-server-latin-america" />;
}
